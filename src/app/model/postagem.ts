import { tema } from "./tema"
import { usuario } from "./usuario"

export class postagem{
    public id: number
    public titulo: string
    public texto: string
    public date: Date
    public usuario: usuario
    public tema: tema

}