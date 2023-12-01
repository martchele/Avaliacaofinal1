export abstract class CadastrarVeiculos {

    private combustivel: string;
    private peso: number;
    private placa: string;
    private modelos: string;
    private marca: string;

    public constructor(_combustivel: string, _peso: number, _placa: string, _modelos: string, _marca: string) {
        this.combustivel = _combustivel;
        this.peso = _peso;
        this.placa = _placa;
        this.modelos = _modelos;
        this.marca = _marca;
    }

    public setCombustivel(_combustivel: string): void {
        this.combustivel = _combustivel;
    }

    public getCombustivel(): string {
        return this.combustivel;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPlaca(_placa: string): void {
        this.placa = _placa;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setModelos(_modelos:string): void{
          this.modelos;
    }

    public getModelos(): string {
        return this.modelos;
    }

    public setMarca(_marca:string): void{
        this.marca;
  }

  public getMarca(): string {
      return this.marca;
  }

    public abstract vencimento(): number;
}