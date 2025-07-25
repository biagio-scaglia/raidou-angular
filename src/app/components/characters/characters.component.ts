// characters.component.ts
import { Component } from '@angular/core';

type CharacterKey = 'narumi' | 'tae' | 'gotou';

interface CharacterDetail {
  icon: string;
  label: string;
  value: string;
}

interface Character {
  name: string;
  role: string;
  description: string;
  details: CharacterDetail[];
  quote: string;
}

@Component({
  selector: 'app-characters',
  standalone: true,
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  activeTab: CharacterKey = 'narumi';

  characterKeys: CharacterKey[] = ['narumi', 'tae', 'gotou'];

  characters: Record<CharacterKey, Character> = {
    narumi: {
      name: 'Shōhei Narumi',
      role: 'Capo Detective & Mentore',
      description:
        'Detective privato ex‑militare, pigro e spesso indebitato, ma con una rete di contatti e un istinto infallibile per i casi più strani. Anche se si lamenta spesso, è una guida fidata per Raidou e conosce bene il sottobosco di Tokyo.',
      details: [
        { icon: 'fa-star', label: 'Passato', value: 'Ex ufficiale militare' },
        { icon: 'fa-balance-scale', label: 'Stile', value: 'Pigro ma efficace' },
        { icon: 'fa-money-bill', label: 'Motivazione', value: 'Sempre a caccia di paga' }
      ],
      quote:
        '"Se il caso paga, ci penso io. Se non paga… beh, ci penso domani."'
    },
    tae: {
      name: 'Tae Asakura',
      role: 'Giornalista & Informatrice',
      description:
        'Reporter freelance ambiziosa del Daily Capital. Pragmatica, intelligente e sempre alla ricerca di uno scoop. Collabora con l’agenzia Narumi fornendo informazioni preziose, anche se spesso finisce a discutere con Narumi per il suo approccio diretto.',
      details: [
        { icon: 'fa-newspaper', label: 'Professione', value: 'Giornalista freelance' },
        { icon: 'fa-map-marker-alt', label: 'Posto frequente', value: 'Shin‑Sekai Soda Joint' },
        { icon: 'fa-lightbulb', label: 'Forza', value: 'Investigazione giornalistica' }
      ],
      quote:
        '"Narumi, smettila di bruciare il toast e aiutami a risolvere questo casino!"'
    },
    gotou: {
      name: 'Gouto‑dōji',
      role: 'Partner Demoniaco & Consulente',
      description:
        'Gatto nero parlante, reincarnazione di un precedente Kuzunoha. È la voce della ragione per Raidou, lo guida nelle indagini e conosce a fondo il mondo demoniaco. Non combatte direttamente, ma offre consigli strategici con un tocco di sarcasmo.',
      details: [
        { icon: 'fa-cat', label: 'Altezza', value: '40 cm' },
        { icon: 'fa-weight', label: 'Peso', value: '3 kg' },
        { icon: 'fa-brain', label: 'Affiliazioni', value: 'Clan Kuzunoha, Yatagarasu' }
      ],
      quote:
        '"Non sono un normale felino, Raidou. Ascolta o finisci graffiato dalla realtà."'
    }
  };

  setActiveTab(tab: CharacterKey) {
    this.activeTab = tab;
  }
}
