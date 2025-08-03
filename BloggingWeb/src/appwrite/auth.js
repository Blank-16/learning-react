
import config from "../config/config.js"
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setEndpoint(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw new Error("Appwrite Error in createAccount");

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw new Error("Appwrite Error in login");
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw new Error("Appwrite Error in getUsername");
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw new Error("Appwrite service errro logout");
        }
    }

}

const authService = new AuthService();

export default authService 
