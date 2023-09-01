import { Column, Entity } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";
import { IUserEntity } from "hichchi-nestjs-common/interfaces";
import { UserRole } from "../enums/user-role.enum";

@Entity("user")
export class UserEntity extends BaseEntity implements IUserEntity {
    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column({ type: "enum", enum: UserRole, default: UserRole.STUDENT })
    role: UserRole;

    @Column()
    regNo: string;

    @Column()
    dob: string;

    @Column()
    gender: string;
}
