class ApplicationParams{

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
    return [import('config/config.json').then((config) => {return config.POSSUI_EMAIL})];
  }

  static get POSSUI_GITHUB(){
    return [import('config/config.json').then((config) => {return config.POSSUI_GITHUB})];
  }

  static get POSSUI_LINKEDIN(){
    return [import('config/config.json').then((config) => {return config.POSSUI_LINKEDIN})];
  }

  // static get VERSAO_FRAMEWORK(){
  //   return "v2";
  // }
  //
  // static get IS_CARREGA_EXPORTACAO_GENERICA(){
  //   return false;
  // }
}
