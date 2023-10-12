import { Repository } from '../shared/repository.js'
import { modoEnvio } from './modoEnvio.entity.js'

const modosEnvio = [
  new modoEnvio(
    'Retiro en sucursal',
    500,
  ),
]

export class modoEnvioRepository implements Repository<modoEnvio> {
  public findAll(): Promise<modoEnvio[] | undefined> {
    //return modosEnvio
    throw new Error("Method not implemented.");
  }

  public findOne(item: { id: string }): Promise<modoEnvio | undefined> {
    //return modosEnvio.find((modoEnvio) => modoEnvio.id === item.id)
    throw new Error("Method not implemented.");
  }

  public add(item: modoEnvio): Promise<modoEnvio | undefined> {
    /*  modosEnvio.push(item)
     return item */
    throw new Error("Method not implemented.");
  }

  public update(item: modoEnvio): Promise<modoEnvio | undefined> {
    /* const modoEnvioIdx = modosEnvio.findIndex((modoEnvio) => modoEnvio.id === item.id)

    if (modoEnvioIdx !== -1) {
      modosEnvio[modoEnvioIdx] = { ...modosEnvio[modoEnvioIdx], ...item }
    }
    return modosEnvio[modoEnvioIdx] */
    throw new Error("Method not implemented.");
  }

  public delete(item: { id: string }): Promise<modoEnvio | undefined> {
    const modoEnvioIdx = modosEnvio.findIndex((modoEnvio) => modoEnvio.id === item.id)

    /* if (modoEnvioIdx !== -1) {
      const deletedCharacters = modosEnvio[modoEnvioIdx]
      modosEnvio.splice(modoEnvioIdx, 1)
      return deletedCharacters
    } */
    throw new Error("Method not implemented.");
  }
}
