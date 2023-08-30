import { Injectable } from "@nestjs/common";
import { UserService } from "./user/services/user.service";

@Injectable()
export class AppService {
    constructor(private userService: UserService) {
        // noinspection JSIgnoredPromiseFromCall
        this.test();
    }

    async test() {
        // console.log(await this.userRepository.save({ firstName: "John", lastName: "Doe", username: "johndoe" }));
        // console.log(await this.userService.getAll());
    }
}
