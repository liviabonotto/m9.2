import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { PrismaService } from '../prisma/prisma.service';
import { UploadDto } from './dto/upload.dto';
import { DistributeDto } from './dto/distribute.dto';
import * as sendgrid from '@sendgrid/mail';
import * as nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'grupo5trackcointeli@gmail.com',
    pass: 'fswalytaisvscpal',
  },
});

@Injectable()
export class ResearchService {
  constructor(private prisma: PrismaService) {}

  async parseCsv(filePath: string, body: UploadDto) {
    console.log(filePath);
    const JSON = await new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(
          csvParser({
            separator: ';',
          }),
        )
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => reject(error));
    });

    const research = await this.prisma.researchs.create({
      data: {
        title: body.title,
        author: body.author,
        product: body.product,
      },
    });

    (JSON as any).forEach(async (element) => {
      await this.prisma.peopleResearchs.create({
        data: {
          name: element.name,
          email: element.email,
          researchId: research.id,
        },
      });
    });

    return { message: 'Arquivo processado com sucesso e pesquisa criada!', id: research.id};
  }

  async getAll() {
    const researchs = await this.prisma.researchs.findMany();
    return researchs;
  }

  async getOne(id: string) {
    const research = await this.prisma.researchs.findUnique({
      where: {
        id: id,
      },
    });

    return research;
  }

  async delete(id: string) {
    await this.prisma.researchs.delete({
      where: {
        id: id,
      },
    });

    return { message: 'Pesquisa deletada com sucesso!' };
  }

  async getStatus(id: string) {
    const peopleResearchs = await this.prisma.peopleResearchs.findMany({
      where: {
        researchId: id,
      },
    });

    const sentEmailsCount = peopleResearchs.filter(
      (person) => person.emailSent === true,
    ).length;

    const totalPeople = peopleResearchs.length;

    return {
      sentEmailsCount,
      totalPeople,
      percentage: totalPeople > 0 ? (sentEmailsCount / totalPeople) * 100 : 0,
    };
  }

  async distribute(id: string) {
    const research = await this.prisma.researchs.findUnique({
      where: {
        id: id,
      },
      include: {
        peopleResearchs: true,
      },
    });

    if (!research) {
      return { error: 'Pesquisa não encontrada' };
    }

    //Fazer o loop para enviar os emails com for para poder adicionar um delay entre os envios
    for(let i = 0; i < research.peopleResearchs.length; i++){
      const mailOptions = {
        to: research.peopleResearchs[i].email,
        from: 'grupo5trackcointeli@gmail.com',
        subject: 'Pesquisa sobre ' + research.product,
        html: `<!DOCTYPE html>
        <html lang="pt">
        <head>
        <meta charset="UTF-8">
        <title>Pesquisa de Satisfação</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                flex-direction: column;
            }
            .container {
                text-align: center;
            }
            .button {
                padding: 10px 20px;
                margin: 5px;
                border: none;
                color: white;
                font-weight: bold;
                cursor: pointer;
                text-decoration: none;
                display: inline-block;
            }
            .btn-1 { background-color: #FF0000; }
            .btn-2 { background-color: #FF3300; }
            .btn-3 { background-color: #FF6600; }
            .btn-4 { background-color: #FF9900; }
            .btn-5 { background-color: #FFCC00; }
            .btn-6 { background-color: #FFFF00; }
            .btn-7 { background-color: #B8D334; }
            .btn-8 { background-color: #78B833; }
            .btn-9 { background-color: #3A9D23; }
            .btn-10 { background-color: #008000; }
        </style>
        </head>
        <body>
        
        <div class="container">
            <h1>Pesquisa de Satisfação da Plataforma X</h1>
            <p>Queremos ouvir sua opinião para melhorar nossos serviços. Por favor, avalie sua experiência com a plataforma X.</p>
            <!-- Substitua YOUR_URL_HERE pela sua URL base -->
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/1" class="button btn-1">1</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/2" class="button btn-2">2</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/3" class="button btn-3">3</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/4" class="button btn-4">4</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/5" class="button btn-5">5</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/6" class="button btn-6">6</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/7" class="button btn-7">7</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/8" class="button btn-8">8</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/9" class="button btn-9">9</a>
            <a href="http://localhost:3000/research/vote/${research.peopleResearchs[i].id}/10" class="button btn-10">10</a>
        </div>
        
        </body>
        </html>`
      };
      await transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
      });
      setTimeout(() => {
        console.log('Enviando email para: ', research.peopleResearchs[i]);
      }, 5000);
    }

    try {
      await Promise.all(
        research.peopleResearchs.map((person) =>
          this.prisma.peopleResearchs.update({
            where: { id: person.id },
            data: { emailSent: true },
          }),
        ),
      );
      return { message: 'Pesquisas distribuídas com sucesso!' };
    } catch (error) {
      console.error('Erro ao enviar emails: ', error);
      return { error: 'Erro ao enviar as pesquisas: ' + error.message };
    }
  }

  async vote(userId: string, vote: string) {
    const peopleResearchs = await this.prisma.peopleResearchs.findUnique({
      where: {
        id: userId,
      },
    });

    if (!peopleResearchs) {
      return { error: 'Usuário não encontrado' };
    }

    if(peopleResearchs.grade !== null || peopleResearchs.grade == 11){
      return { error: 'Usuário já votou' };
    }

    await this.prisma.peopleResearchs.update({
      where: {
        id: userId,
      },
      data: {
        grade: parseInt(vote),
      },
    });

    return { message: 'Voto computado com sucesso' };
  }

  async updateResearchService(id: string, updateItemDto:UploadDto) {
    try {
      const updateReserch = await this.prisma.researchs.update({
        where: {
          id: id,
        },
        data: {
          title: updateItemDto.title,
          author: updateItemDto.author,
          product: updateItemDto.product
        }
      });
      return updateReserch;
    } catch (error) {
      console.error('Erro ao enviar emails: ', error);
      return { error: 'Erro ao enviar as pesquisas: ' + error.message };
    }
  }
  async deleteResearchService(id:string) {
    try{
      await this.prisma.researchs.delete({
        where: {
          id:id
        }
      })
      return "Pesquisa excluída com sucesso"
    } catch(error) {
      console.error('Erro ao enviar emails: ', error);
      return { error: 'Erro ao enviar as pesquisas: ' + error.message };
    }
  }
}






