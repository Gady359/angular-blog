import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="https://www.publicdomainpictures.net/pictures/550000/nahled/rat-gangsterstijl-fantasie.jpg"
  contentTitle:string=""
  contentDescription:string="Em um labirinto urbano esquecido pelos humanos, existia uma gangue de ratos conhecida como os Ratos 3/4. Essa gangue era liderada por Roedor, um rato astuto e corajoso que tinha grandes ambições para seus companheiros roedores.Tudo começou nas entranhas de um beco sombrio, onde Roedor, junto com seus leais amigos Ratinho e Queijo, decidiu formar uma gangue para conquistar a cidade. Eles eram ratos ousados, sempre em busca de oportunidades para aumentar sua influência. A cidade, apesar de ser um lugar hostil para os roedores, tornou-se o terreno de jogo perfeito para os Ratos 3/4.No início, a gangue enfrentou muitos desafios. Outras gangues de ratos tentavam intimidá-los, e os gatos da cidade eram uma constante ameaça. Mas Roedor tinha um plano genial: eles começariam a controlar as rotas de comida na cidade. Roubavam pequenas porções dos estoques dos humanos, tornando-se mestres na arte do furto alimentar.Com o tempo, os Ratos 3/4 ganharam respeito e temor. Roedor tinha uma mente estratégica, sempre um passo à frente de seus adversários. Eles expandiram suas operações, controlando não apenas os alimentos, mas também os esgotos e os túneis subterrâneos.No entanto, o sucesso não veio sem custos. A gangue começou a se envolver em conflitos internos, disputas pelo poder e lealdade. Roedor teve que ser implacável para manter a ordem, o que levou a alguns dos seus próprios companheiros virando as costas para a gangue.Além disso, a notoriedade dos Ratos 3/4 atraiu a atenção indesejada. Uma organização de controle de pragas começou a caçá-los de perto, ameaçando a existência da gangue. Roedor teve que usar toda a sua astúcia para evitar os caçadores e proteger sua gangue.No final, os Ratos 3/4 conseguiram alcançar um sucesso notável, mas o caminho até lá estava cheio de traições, desafios e momentos difíceis. A cidade agora estava nas patas deles, mas a lama da vida nas ruas os ensinou que, no submundo urbano, a ascensão ao poder vem com um preço alto."
  private id:string | null="0"

  constructor(
    private route:ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id=value.get("id")
      )

      this.setValuesToComponent(this.id)

  }

  setValuesToComponent(id:string | null){
    const result=dataFake.filter(article => article.id==id)[0]

    this.contentTitle= result.title
    this.contentDescription =result.description
    this.photoCover=result.photocover
  }



}
