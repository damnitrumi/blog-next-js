import { PostCardProps } from ".";
import { data } from "../../api/dados.json";

const { id, attributes } = data.posts.data[0];

const { title, excerpt, cover, author, categories, createdAt, slug } =
  attributes;

const { id: coverId, attributes: coverAttributes } = cover.data;
const { alternativeText: coverAlternativeText, url: coverUrl } =
  coverAttributes;

const { id: authorId, attributes: authorAttibutes } = author.data;
const { displayName: authorDisplayName, slug: authorSlug } = authorAttibutes;

const { id: categoryId, attributes: categoriesAttibutes } = categories.data[0];
const { displayName: categoryDisplayName, slug: categorySlug } =
  categoriesAttibutes;

export default {
  id,
  createdAt,
  title,
  excerpt,
  cover: {
    id: coverId,
    alternativeText: coverAlternativeText,
    url: coverUrl,
  },
  author: {
    id: authorId,
    displayName: authorDisplayName,
    slug: authorSlug,
  },
  categories: [
    {
      id: categoryId,
      displayName: categoryDisplayName,
      slug: categorySlug,
    },
  ],
  content: `
  <p>Nostro <strong>definitiones</strong> (<i>React</i>) sed cu - <u>Guilherme Soares</u>. Sea <code>useEffect</code>, useState dicat fabulas <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">consetetur</a> no, odio deseruisse assueverit mei eu, vis probo nonumes molestie id. Ipsum movet liberavisse an mea, diceret vituperata ne his, delenit apeirian quo ea. Imperdiet percipitur te eos. Per ludus aliquam cu. <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">Eos ex tincidunt necessitatibus, timeam theophrastus mel cu</a>. La.</p>

  <h1>Tincidunt necessitatibus, timeam theophrastus mel cu</h1>
  <h2>Tincidunt necessitatibus, timeam theophrastus mel cu</h2>
  <h3>Tincidunt necessitatibus, timeam theophrastus mel cu</h3>
  <h4>Tincidunt necessitatibus, timeam theophrastus mel cu</h4>
  <h5>Tincidunt necessitatibus, timeam theophrastus mel cu</h5>
  <h6>Tincidunt necessitatibus, timeam theophrastus mel cu</h6>

  <pre><code class="language-plaintext">import { HtmlContent } from '../HtmlContent';
  import * as Styled from './styles';

  export type FooterProps = {
    footerHtml: string;
  };

  export const Footer = ({ footerHtml }: FooterProps) => {
    return (
      &lt;Styled.Container&gt;
        &lt;HtmlContent html={footerHtml} /&gt;
      &lt;/Styled.Container&gt;
    );
  };
  </code></pre>

  <p>Qui eu <i>mutat</i> exerci <span style="background-color:hsl(60,75%,60%);">dolores</span>, his no <span style="color:hsl(270,75%,60%);">repudiare</span> constituam <s>accommodare</s>, vis ea sint <u>tempor</u> eirmod. In mei eruditi moderatius, ex per iudico essent repudiandae. In vis vidisse menandri, an has repudiare disputationi delicatissimi. In has wisi justo postulant. Ei viderer ornatus mel, usu an partiendo tincidunt, ea eum brute ullamcorper.</p><p>10<sup>2</sup>*5<sup>2</sup> - H<sub>2</sub>0</p><p style="text-align:center;"><strong>Center: </strong>Abhorreant reformidans eum an, per equidem repudiandae no, ex cum elitr argumentum persequeris. In eam consul theophrastus delicatissimi, lobortis rationibus efficiendi mea ei, nam natum dolore scripserit ea. Sit partiendo eloquentiam ne. Sea no autem dolores, ridens gloriatur mel cu. Munere nullam epicuri his id, dicam definiebas deterruisset eu vim. Ea veritus deleniti usu, nam ei idque choro volumus, ex nisl aliquam bonorum eam.</p><p>Fugit aliquip erroribus eu eam, an mel vidit doctus. Vis nobis veritus maluisset id, nonumy adversarium neglegentur est ut. Tation persius pri eu, modo minim fastidii mei no. Ad tota pertinax definiebas eam.</p><p style="text-align:right;"><strong>Right:</strong> Mel in lorem feugiat, tation dolore et eum. Id has utamur albucius molestiae. Dico justo maiestatis ei mei, labitur laboramus voluptatum nam ut. Saperet propriae nec an.</p><p>Quod oblique mei ne, cetero delicatissimi sea cu, cu est harum dicit verterem. Tota forensibus ut usu, luptatum dignissim persecuti vel ex. Mea nostrud instructior cu, et referrentur theophrastus eum. Pro in iuvaret senserit. In persius explicari conceptam nec, in populo ponderum consequat vis. Gloriatur conclusionemque no qui, vitae nominati nec te, laoreet torquatos accommodare ex qui. Eu natum mediocritatem eos, cum ex alia oportere.</p><p style="text-align:justify;"><strong>Justify:</strong> Cu vis nonumes petentium disputationi, invidunt aliquando ex ius, ocurreret suscipiantur conclusionemque eu qui. Probo nemore ut est. Et eam dicta oratio eligendi. Quem dicta dolore vel et, at reque gloriatur definitionem sed.</p><p>Nec simul ullamcorper at. Mea possit dolores persecuti te, ei quidam apeirian quo. Has quas corpora ne. Ius ad malis iusto delenit, sit ferri idque ex.</p><blockquote><p>Blockquote: Et sed legere rationibus, vitae evertitur ad eam. Eu amet vero officiis vis. Ad nullam pericula neglegentur sit, vix ei regione legendos argumentum. Mei an quas convenire, nobis dicunt mei ut. Pro no debet referrentur, ei est falli libris. Eu per summo salutandi hendrerit, salutatus democritum interesset nec ut. Wisi lobortis incorrupte ei mea, explicari interpretaris has et.</p></blockquote><p>A new line:</p><hr><p>Now keep going…</p><figure class="image"><a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad"><img src="https://res.cloudinary.com/dlizakp2a/image/upload/v1614696630/Frozen_sunset_on_the_lake_by_Manuel_Arslanyan_9f9cd8ea10.jpg" alt="O alt text da imagem"></a><figcaption>Aqui está uma imagem</figcaption></figure><p>Munere euripidis an sed, usu ne consul soluta utamur. Bonorum equidem placerat eu cum, tantas quidam duo et. Pro soleat quaestio ne, ut nam wisi vocibus inciderint, ex his maiorum mnesarchum. Et est wisi primis, id vel odio alienum voluptatibus. Veri doctus offendit vim ea. Has nemore prompta inciderint ei, no sea expetendis dissentiet. Copiosae delicatissimi an sea, id cum agam clita nostro, tale tincidunt delicatissimi ei eos.</p><figure class="image image-style-side"><img src="https://res.cloudinary.com/dlizakp2a/image/upload/v1614696630/Frozen_sunset_on_the_lake_by_Manuel_Arslanyan_9f9cd8ea10.jpg" alt="Uma imagem à direita"><figcaption>Uma imagem à direita</figcaption></figure><p>Munere euripidis an sed, usu ne consul soluta utamur. Bonorum equidem placerat eu cum, tantas quidam duo et. Pro soleat quaestio ne, ut nam wisi vocibus inciderint, ex his maiorum mnesarchum. Et est wisi primis, id vel odio alienum voluptatibus. Veri doctus offendit vim ea. Has nemore prompta inciderint ei, no sea expetendis dissentiet. Copiosae delicatissimi an sea, id cum agam clita nostro, tale tincidunt delicatissimi ei eos.</p><p>Munere euripidis an sed, usu ne consul soluta utamur. Bonorum equidem placerat eu cum, tantas quidam duo et. Pro soleat quaestio ne, ut nam wisi vocibus inciderint, ex his maiorum mnesarchum. Et est wisi primis, id vel odio alienum voluptatibus. Veri doctus offendit vim ea. Has nemore prompta inciderint ei, no sea expetendis dissentiet. Copiosae delicatissimi an sea, id cum agam clita nostro, tale tincidunt delicatissimi ei eos.</p><p>Solum consul scripserit in duo, an sit postea denique percipit. Facer ignota consequat nec ei, idque etiam corrumpit sit ut. In mucius definitionem quo, vis an nisl diam appellantur, hendrerit comprehensam ea per. Vix saepe fierent ut.</p><p>Cu mei summo copiosae. Et vim quaestio partiendo. Quot praesent imperdiet at duo. Sit probo causae ei. Ad ius nemore eruditi.</p><p>Mei in qualisque disputando. Adipisci philosophia et sed, mel diceret patrioque sententiae ea, iriure posidonium consectetuer ad eam. Nobis reprimique duo in, eam corpora mandamus ex. In quod euismod eum, ne habemus cotidieque necessitatibus cum. Liber recteque duo no, ludus reprehendunt has an.</p><p>Solum consul scripserit in duo, an sit postea denique percipit. Facer ignota consequat nec ei, idque etiam corrumpit sit ut. In mucius definitionem quo, vis an nisl diam appellantur, hendrerit comprehensam ea per. Vix saepe fierent ut.</p><p>Cu mei summo copiosae. Et vim quaestio partiendo. Quot praesent imperdiet at duo. Sit probo causae ei. Ad ius nemore eruditi.</p><p>Mei in qualisque disputando. Adipisci philosophia et sed, mel diceret patrioque sententiae ea, iriure posidonium consectetuer ad eam. Nobis reprimique duo in, eam corpora mandamus ex. In quod euismod eum, ne habemus cotidieque necessitatibus cum. Liber recteque duo no, ludus reprehendunt has an.</p><p>Bullet:</p><ul><li>Mei in qualisque disputando. Adipisci philosophia et sed, mel diceret patrioque sententiae ea, iriure posidonium consectetuer ad eam. Nobis reprimique duo in, eam corpora mandamus ex. In quod euismod eum, ne habemus cotidieque necessitatibus cum. Liber recteque duo no, ludus reprehendunt has an.</li><li>iriure posidonium consectetuer ad eam.</li><li>Nobis reprimique duo in, eam corpora mandamus</li><li>ex. In</li><li>quod euismod</li><li>eum, ne habemus cotidieque necessitatibus cum.</li><li>Liber recteque duo no, ludus reprehendunt has an.</li></ul><p>Now ordered:</p><ol><li>Item 1</li><li>Item</li><li>Item</li><li>Item</li></ol><p>A think that's it…</p><figure class="table"><table><thead><tr><th>Title 1</th><th>Title 1</th><th>Title 1</th><th>Title 1</th><th>Title 1</th><th>Title 1</th><th>Title 1</th><th>Title 1</th><th>Title 1</th><th>Title 1</th></tr></thead><tbody><tr><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td></tr><tr><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td></tr><tr><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td><td>Item</td></tr></tbody></table></figure><p>A video:</p><figure class="media"><oembed url="https://www.youtube.com/watch?v=oLmRV25eQvo"></oembed></figure><p>The end.</p>
  `,
  slug,
} as PostCardProps;

// excerpt,
//   cover,
//   author,
//   categories,
//   createdAt,
