export interface PatrimonioItem {
  registro: string;
  descricao: string;
  unidade: string;
  localizacao: string;
  situacao: string;
  valor?: string;
  encontrado?: boolean;
  dataImportacao?: string;
  dataEscaneamento?: string;
}

export interface InventarioMetadata {
  nome: string;
  dataImportacao: string;
  totalItens: number;
}

export interface Inventario {
  metadata: InventarioMetadata;
  items: PatrimonioItem[];
  scanned: PatrimonioItem[];
}

export interface ScanResult {
  type: "success" | "error" | "warning";
  message: string;
  item?: PatrimonioItem;
  code?: string;
  timestamp: string;
}

export interface AppSettings {
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  flashEnabled: boolean;
  theme: "light" | "dark";
}
