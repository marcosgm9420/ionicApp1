import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Datos simulados (en un caso real vendrían de una API con fetch o HttpClient)
  private users: User[] = [
    { id: 1, name: 'Ana', email: 'ana@test.com', active: true },
    { id: 2, name: 'Luis', email: 'luis@test.com', active: false },
    { id: 3, name: 'Carlos', email: 'carlos@test.com', active: true }
  ];

  // Simula una llamada asíncrona a una API (delay de 500ms)
  async getUsers(): Promise<User[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.users), 500);
    });
  }

  // Devuelve solo los usuarios activos
  async getActiveUsers(): Promise<User[]> {
    const users = await this.getUsers();
    return users.filter(u => u.active);
  }

  // Busca un usuario concreto por id
  async getUserById(id: number): Promise<User | undefined> {
    const users = await this.getUsers();
    return users.find(u => u.id === id);
  }
}