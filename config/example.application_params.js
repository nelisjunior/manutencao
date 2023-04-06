class DataprevApplicationParams{

  static get IS_PARAMETRO_OBRIGATORIO(){
    return false;
  }

  static get TITULO_APP(){
    return [import('config/config.json').then((config) => {return config.TITULO_APP})];
  }

  static get IS_APP_PUBLICO (){
    return true;
  }

  static get POSSUI_EMAIL(){
    return "";
  }

  static get POSSUI_GITHUB(){
    return "";
  }

  static get POSSUI_LINKEDIN(){
    return "";
  }

  static get VERSAO_FRAMEWORK(){
    return "v2";
  }

  static get IS_CARREGA_EXPORTACAO_GENERICA(){
    return false;
  }
}
