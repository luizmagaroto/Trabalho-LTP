export class Candidato {
  private static proximoId = 1;
  private id: number;
  private nome: string;
  private turma: string;
  private cargo: string;
  private votos: number = 0;

  constructor(nome: string, turma: string, cargo: string) {
    this.id = Candidato.proximoId++;
    this.nome = nome;
    this.turma = turma;
    this.cargo = cargo;
  }

  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getCargo(): string {
    return this.cargo;
  }

  public getTurma(): string {
    return this.turma;
  }

  public getVotos(): number {
    return this.votos;
  }

  public adicionarVoto(): void {
    this.votos++;
  }
}
