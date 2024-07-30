import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'languageConverter';
  getConverterValues:any;
  language:any;
  convertedLanguageData:any;
  text:string = ''
  countryLanList:any = [
    { language: "English", langCode: "en" },
    { language: "Spanish", langCode: "es" },
    { language: "French", langCode: "fr" },
    { language: "German", langCode: "de" },
    { language: "Chinese", langCode: "zh" },
    { language: "Japanese", langCode: "ja" },
    { language: "Korean", langCode: "ko" },
    { language: "Hindi", langCode: "hi" },
    { language: "Bengali", langCode: "bn" },
    { language: "Russian", langCode: "ru" },
    { language: "Portuguese", langCode: "pt" },
    { language: "Italian", langCode: "it" },
    { language: "Dutch", langCode: "nl" },
    { language: "Greek", langCode: "el" },
    { language: "Turkish", langCode: "tr" },
    { language: "Arabic", langCode: "ar" },
    { language: "Hebrew", langCode: "he" },
    { language: "Swedish", langCode: "sv" },
    { language: "Norwegian", langCode: "no" },
    { language: "Danish", langCode: "da" },
    { language: "Finnish", langCode: "fi" },
    { language: "Polish", langCode: "pl" },
    { language: "Czech", langCode: "cs" },
    { language: "Hungarian", langCode: "hu" },
    { language: "Thai", langCode: "th" },
    { language: "Vietnamese", langCode: "vi" },
    { language: "Indonesian", langCode: "id" },
    { language: "Malay", langCode: "ms" },
    { language: "Filipino", langCode: "fil" },
    { language: "Swahili", langCode: "sw" }
  ];

  ngOnInit(){
    this.countryLanList =  this.countryLanList.sort((a:any, b:any) => a.language.localeCompare(b.language));
  }

 async getTextValues(){


    console.log(this.language);
    
    
    const url:any = 'https://google-translator9.p.rapidapi.com/v2';
  const options:any = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'ab98a70df4msh173c2968cd28d25p194910jsn91428eff5b4a',
      'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({
      q: this.getConverterValues,
      source: 'en',
      target: this.language,
      format: 'text'
    })
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    this.convertedLanguageData = result.data.translations[0].translatedText;

    console.log(result);
  } catch (error) {
    console.error(error);

  }
    

  }




  
}
