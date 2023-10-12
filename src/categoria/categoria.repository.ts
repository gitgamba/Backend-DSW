import { Repository } from "../shared/repository.js";
import { Categoria } from "./categoria.entity.js";
import { pool } from "../shared/db/conn.mysql.js";
import { ResultSetHeader, RowDataPacket } from "mysql2";


export class categoriaRepository implements Repository<Categoria>{
  public async findAll(): Promise<Categoria[] | undefined> {
    const [CategoriaRow] = await pool.query<RowDataPacket[]>('SELECT * FROM categoria')
    if (CategoriaRow.length === 0) {
      return undefined;
    }
    return CategoriaRow as Categoria[];
  }

  public async findOne(categoriaInput: { id: string }): Promise<Categoria | undefined> {
    const id = Number.parseInt(categoriaInput.id);
    const [CategoriaRow] = await pool.query<RowDataPacket[]>('SELECT * FROM categoria WHERE idCategoria = ?', [id])
    if (CategoriaRow.length === 0) {
      return undefined;
    }
    return CategoriaRow[0] as Categoria;
  }

  public async add(categoriaInput: Categoria): Promise<Categoria | undefined> {
    const { IdCategoria, ...CategoriaData } = categoriaInput
    const [resultado] = await pool.query<ResultSetHeader>('INSERT Into categoria(Descripcion_Categoria) values (?)', [CategoriaData.NombreCategoria])
    /* const [resultado] = await pool.query<ResultSetHeader>('INSERT INTO categoria set ?', [CategoriaData.NombreCategoria]) */
    categoriaInput.IdCategoria = resultado.insertId;
    return categoriaInput;

  }
  //[...Object.values(CategoriaData)]
  public async update(categoriaInput: Categoria): Promise<Categoria | undefined> {
    const { IdCategoria, ...CategoriaData } = categoriaInput
    const [result] = await pool.query<ResultSetHeader>('UPDATE categoria SET Descripcion_Categoria = ? WHERE idCategoria = ?', [CategoriaData.NombreCategoria, IdCategoria])
    if (result.affectedRows === 0) {
      return undefined;
    }
    return categoriaInput;
    /*     const index = categorias.findIndex((categoria) => categoria.IdCategoria == item.IdCategoria);
        if (index !== -1) {
          categorias[index] = { ...categorias[index], ...item }
    
        }
        return item; */
  }

  public async delete(item: { id: string }): Promise<Categoria | undefined> {
    const categoriaEliminada = await this.findOne(item);
    const id = Number.parseInt(item.id);
    await pool.query<ResultSetHeader>('DELETE FROM categoria WHERE idCategoria = ?', [id])
    if (!categoriaEliminada) {
      return undefined;
    } else { return categoriaEliminada }
    ;


    /* const id = Number.parseInt(item.id);
    const [result] = await pool.query<ResultSetHeader>('DELETE FROM categoria WHERE idCategoria = ?', [id])
    if (result.affectedRows === 0) {
      return undefined;
    } */


    /* const index = categorias.findIndex((categoria) => categoria.IdCategoria == item.id);
    if (index !== -1) {
     const categoriaEliminada = categorias[index];
      categorias.splice(index, 1);
    return categoriaEliminada; */
  }
}