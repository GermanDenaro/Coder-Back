class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = libros),
      (this.mascotas = mascotas);
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(nombre) {
    this.mascotas.push(nombre);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombreLibro, autor) {
    this.libros.push({ nombreLibro, autor });
  }

  getBookNames() {
    return this.libros.map((e) => e.nombreLibro);
  }
}

let newUser = new Usuario(
  'German',
  'Denaro',
  [
    { nombreLibro: 'Game of Thrones', autor: 'George R. R. Martin' },
    { nombreLibro: 'Biohazard', autor: 'Shinji Mikami' },
  ],
  ['Triny']
);

newUser.getFullName();
newUser.addMascota('Pepe');
newUser.countMascotas();
newUser.addBook('El Señor de los Anillos', 'J. R. R. Tolkien');
newUser.getBookNames();
