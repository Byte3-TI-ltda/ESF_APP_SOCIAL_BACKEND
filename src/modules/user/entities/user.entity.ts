import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserInterface } from "../interfaces/user.interface";

@Entity('users')
export class UserEntity implements UserInterface{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({})
    nome: string;

    @Column({})
    email: string;

    @Column({})
    whatsapp: string;

    @Column({})
    password: string;
}