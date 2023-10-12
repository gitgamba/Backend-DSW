import { Repository } from "../shared/repository.js";
import { Localidad } from "./localidad.entity.js";


const localidades = [new Localidad('Buenos Aires')];

export class localidadRepository implements Repository<Localidad>{
  public findAll(): Promise<Localidad[] | undefined> {
    //return localidades;
    throw new Error("Method not implemented.");
  }

  public findOne(item: { id: string }): Promise<Localidad | undefined> {
    //return localidades.find((localidad) => localidad.IdLocalidad == item.id);
    throw new Error("Method not implemented.");
  }

  public add(item: Localidad): Promise<Localidad | undefined> {
    localidades.push(item);
    //return item;
    throw new Error("Method not implemented.");
  }

  public update(item: Localidad): Promise<Localidad | undefined> {
    const index = localidades.findIndex((localidad) => localidad.IdLocalidad == item.IdLocalidad);
    if (index !== -1) {
      localidades[index] = { ...localidades[index], ...item }

    }
    //return item;
    throw new Error("Method not implemented.");
  }

  public delete(item: { id: string }): Promise<Localidad | undefined> {
    const index = localidades.findIndex((localidad) => localidad.IdLocalidad == item.id);
    /* if (index !== -1) {
      const localidadEliminada = localidades[index];
      localidades.splice(index, 1);
      //return localidadEliminada;
    } */
    throw new Error("Method not implemented.");
  }
}