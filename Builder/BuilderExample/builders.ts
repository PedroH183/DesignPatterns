

// vai existir dois tipos de computadores o gamer e o basico

class Computer{
  monitor : string
  teclado : string
  memoria : string
  processador : string
}

interface IBuilderComputer{
  computador : Computer | null
  
  reset();
  getResult();
  setMonitor();
  setTeclado();
  setMemoria();
  setProcessador();
}

class BuilderComputerBasic implements IBuilderComputer{
  computador : Computer

  constructor(  ){
    this.computador = new Computer()
  }

  setMonitor() {
    this.computador.monitor = "21 polegadas"
  }
  reset = () : Computer =>  {
    return this.computador = new Computer()
  }
  setTeclado() {
    this.computador.teclado = "logitec teclado"
  }
  setMemoria() {
    this.computador.memoria = "256gb 8bg"
  }
  setProcessador() {
    this.computador.processador = "i5 7200"
  }
  getResult() {  
    return this.computador
  }
}

class BuilderComputerGamer implements IBuilderComputer{
  computador: Computer
  
  reset = () : Computer =>  {
    return this.computador = new Computer()
  }
  setMonitor() {
    this.computador.monitor = "31 polegadas"
  }
  setTeclado() {
    this.computador.teclado = "Teclado Gamer Sem Fio Logitech G Pro X"
  }
  setMemoria() {
    this.computador.teclado = "Teclado Gamer Sem Fio Logitech G Pro X"
  }
  setProcessador() {
    this.computador.processador = "i7-12700KF"
  }
  getResult() {
    return this.computador
  }
}