import { Candidato } from './Candidato';
import { Votacao } from './Votacao';

// Criando instâncias dos candidatos
const candidato1 = new Candidato(1, "João");
const candidato2 = new Candidato(2, "Maria");
const candidato3 = new Candidato(3, "Carlos");

// Criando a instância da votação
const votacao = new Votacao();

// Cadastrando os candidatos na votação
votacao.cadastrarCandidato(candidato1);
votacao.cadastrarCandidato(candidato2);
votacao.cadastrarCandidato(candidato3);

// Simulando o registro de votos (eleitores votando)
votacao.registrarVoto(1, 101);  // Eleitor 101 votando em João
votacao.registrarVoto(2, 102);  // Eleitor 102 votando em Maria
votacao.registrarVoto(1, 103);  // Eleitor 103 votando em João
votacao.registrarVoto(3, 104);  // Eleitor 104 votando em Carlos
votacao.registrarVoto(2, 105);  // Eleitor 105 votando em Maria
votacao.registrarVoto(1, 106);  // Eleitor 106 votando em João

// Tentativa de voto duplicado
votacao.registrarVoto(2, 102);  // Eleitor 102 tentando votar novamente em Maria

// Gerar relatório de votos
votacao.gerarRelatorio();
