import { UserModule } from "./user/user.module";
import { StudentModule } from "./student/student.module";
import { AuthModule } from "./auth/auth.module";
import { FilesModule } from "./files/files.module";
import { CoursetableModule } from "./coursetable/coursetable.module";
import { SalaryModule } from "./salary/salary.module";
import { NetworkDiskModule } from "./network-disk/network-disk.module";
export default [UserModule, AuthModule, StudentModule, FilesModule, CoursetableModule, SalaryModule, NetworkDiskModule];