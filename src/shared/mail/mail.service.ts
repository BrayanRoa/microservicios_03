
export class MailService {

    constructor() {
        console.log("VARIABLE: ",process.env.SENDGRID_API_KEY!);
    }

    async mailValido(correo: string): Promise<boolean> {
        const aux = correo.split("@")
        if (aux[1] !== 'ufps.edu.co') {
            return false
        }
        return true
    }

}