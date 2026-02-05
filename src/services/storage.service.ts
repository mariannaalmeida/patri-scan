import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system/legacy";
import { Inventario } from "./../types/types";

const STORAGE_KEYS = {
  INVENTARIOS_INDEX: "@patriscan:inventarios_index", // Lista de nomes/IDs
  SETTINGS: "@patriscan:settings",
} as const;

// Pasta raiz para todos os inventarios ( organização)
//const INVENTARIO_DIR = `${FileSystem.documentDirectory}inventarios/`;

export class StorageService {
  /** Metodo para auxiliar para obter o diretorio raiz **/
  private static getRootDirectory(): string {
    return `${FileSystem.documentDirectory}inventarios/`;
  }
  private static getInventatioDirectory(nome: string ): string {
    const safeName = this.getSafeFileName(nome) ;
    return `${this.getRootDirectory()}${safeName}/`
  }

  /**
   * Ajuda a transformar "Inventário 10/2024" em "inventario_10_2024"
   * para evitar erros de criação de pasta.
   */
  private static getSafeFileName(nome: string): string {
    return nome
    .normalize('NFD')
    .replace(/[^a-z0-9]/g, "-").toLowerCase();
  }

  // --- 1. Inicialização ---
  /**
   * Garante que a pasta base 'inventarios' exista.
   */
  static async ensureDirectoryExists(): Promise<void> {
    const dirInfo = await FileSystem.getInfoAsync;
  }

  // listar os inventários
  static async getInventarios(): Promise<string[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.INVENTARIOS_INDEX);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Erro ao buscar inventários:", error);
      return [];
    }
  }

  // Salvar o inventario
  static async saveInventario(inventario: Inventario): Promise<boolean> {
    try {
      const inventarios = await this.getInventarios();
      const inventarioPath = `${FileSystem.docume}`;
    } catch (error) {
      return {};
    }
  }
}
