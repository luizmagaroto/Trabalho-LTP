class Pessoa {
  nome: string;
  id: number;

  constructor(nome: string, id: number) {
    this.nome = nome;
    this.id = id;
  }
}

class Candidato extends Pessoa {
  votos: number = 0;

  receberVoto() {
    this.votos++;
  }
}

class Eleitor extends Pessoa {
  votou: boolean = false;
}

class Votacao {
  candidatos: Candidato[] = [];
  eleitores: Eleitor[] = [];

  adicionarCandidato(nome: string, id: number) {
    const existe = this.candidatos.some(c => c.id === id);
    if (existe) {
      console.log("❌ Candidato já existe.");
      return;
    }
    this.candidatos.push(new Candidato(nome, id));
    console.log("✅ Candidato cadastrado.");
  }

  adicionarEleitor(nome: string, id: number) {
    const existe = this.eleitores.some(e => e.id === id);
    if (existe) {
      console.log("❌ Eleitor já existe.");
      return;
    }
    this.eleitores.push(new Eleitor(nome, id));
    console.log("✅ Eleitor cadastrado.");
  }

  votar(idEleitor: number, idCandidato: number) {
    try {
      const eleitor = this.eleitores.find(e => e.id === idEleitor);
      const candidato = this.candidatos.find(c => c.id === idCandidato);

      if (!eleitor || !candidato) throw new Error("Eleitor ou candidato não encontrado.");
      if (eleitor.votou) {
        console.log("⚠️ Eleitor já votou.");
        return;
      }

      candidato.receberVoto();
      eleitor.votou = true;
      console.log("🗳️ Voto registrado.");
    } catch (erro) {
      console.log("❌ Erro:", (erro as Error).message);
    }
  }

  mostrarResultado() {
    console.log("📊 Resultado da Votação:");
    this.candidatos.forEach(c => {
      console.log(`${c.nome}: ${c.votos} votos`);
    });
  }
}

const sistema = new Votacao();
sistema.adicionarCandidato("Ana", 1);
sistema.adicionarCandidato("Bruno", 2);
sistema.adicionarEleitor("Carlos", 101);
sistema.adicionarEleitor("Diana", 102);

sistema.votar(101, 1); 
sistema.votar(102, 2); 
sistema.votar(101, 2); 

sistema.mostrarResultado();