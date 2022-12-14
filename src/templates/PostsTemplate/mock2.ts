export default {
  setting: {
    data: {
      id: "1",
      attributes: {
        blogName: "Guilherme Soares",
        blogDescription: "Meu Blog",
        logo: {
          data: {
            id: "6",
            attributes: {
              alternativeText: "bruce-warrington-eMqG0_PpoGg-unsplash.jpg",
              url: "https://res.cloudinary.com/dhzzrpp9c/image/upload/v1666050383/bruce_warrington_e_Mq_G0_Ppo_Gg_unsplash_c95c222cf2.jpg",
            },
          },
        },
        menuLink: [
          {
            id: "1",
            link: "#link1",
            text: "Link 1",
            newTab: false,
          },
        ],
        text: "<p>Just some text</p>",
      },
    },
  },
  posts: {
    data: [
      {
        id: "2",
        attributes: {
          title: "React - Library or Framework?",
          slug: "react-library-or-framework",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula elementum consequat. Sed at bibendum ante, eget egestas turpis.",
          content:
            '<p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula elementum consequat. Sed at bibendum ante, eget egestas turpis. Duis non lectus sollicitudin, scelerisque ante vel, mattis enim. Sed accumsan at libero sit amet vehicula. Vivamus tincidunt augue urna.</span></p><figure class="image"><img src="https://res.cloudinary.com/dhzzrpp9c/image/upload/v1666052834/bruce_warrington_e_Mq_G0_Ppo_Gg_unsplash_fee2807bf6.jpg"></figure><blockquote><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">eget volutpat diam vestibulum in. Sed rhoncus ipsum at convallis ornare. Quisque tincidunt consectetur ligula a accumsan. Pellentesque pharetra orci a ullamcorper tristique. Vestibulum porta sem sit amet turpis consequat ultricies. Sed eget malesuada magna, at aliquet ante. Aenean at sem nisi. Morbi tincidunt ut risus ut malesuada. Praesent nisi justo, gravida finibus porttitor nec, dignissim ut lorem.</span></p></blockquote><figure class="image image-style-side"><img src="https://res.cloudinary.com/dhzzrpp9c/image/upload/v1666052834/bruce_warrington_e_Mq_G0_Ppo_Gg_unsplash_fee2807bf6.jpg"><figcaption>Image with caption</figcaption></figure><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">Vivamus consequat, risus vitae mattis vestibulum, elit lorem pharetra urna, ut dictum massa diam eget dui. Suspendisse a ex sit amet est blandit pharetra at et odio. Duis at risus vitae diam tempor dignissim. Mauris aliquet mauris ac turpis blandit, et feugiat ligula hendrerit. Maecenas eu auctor lacus. Aenean pellentesque, ante eu rutrum viverra, ligula mauris hendrerit purus, ac congue diam nisl nec metus. Fusce at risus finibus, maximus augue vel, pulvinar sem. Aliquam venenatis imperdiet est, at placerat turpis volutpat at. Sed efficitur laoreet imperdiet.</span></p><pre><code class="language-plaintext">useEffect(() =&gt; {    // Atualiza o t??tulo do documento usando a API do browser    document.title = `Voc?? clicou ${count} vezes`;  });\n\n// Declarar uma nova vari??vel de state, na qual chamaremos de "count"\n  const [count, setCount] = useState(0);</code></pre>',
          createdAt: "2022-10-18T00:29:36.571Z",
          allowComments: true,
          cover: {
            data: {
              id: "6",
              attributes: {
                alternativeText: "bruce-warrington-eMqG0_PpoGg-unsplash.jpg",
                url: "https://res.cloudinary.com/dhzzrpp9c/image/upload/v1666050383/bruce_warrington_e_Mq_G0_Ppo_Gg_unsplash_c95c222cf2.jpg",
              },
            },
          },
          categories: {
            data: [
              {
                id: "2",
                attributes: {
                  displayName: "React",
                  slug: "react",
                },
              },
            ],
          },
          tags: {
            data: [
              {
                id: "1",
                attributes: {
                  displayName: "useState",
                  slug: "use-state",
                },
              },
              {
                id: "2",
                attributes: {
                  displayName: "useEffect",
                  slug: "use-effect",
                },
              },
            ],
          },
          author: {
            data: {
              id: "1",
              attributes: {
                displayName: "Guilherme Soares",
                slug: "guilherme-soares",
              },
            },
          },
        },
      },
      {
        id: "1",
        attributes: {
          title: "Javascript - The Most Famous Language",
          slug: "javascript-the-most-famous-language",
          excerpt:
            "Pellentesque Javascript habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          content:
            '<p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat lobortis magna vitae rutrum. Vestibulum eget vehicula nunc, non lacinia augue. Mauris quis urna erat. Sed non neque sed elit tincidunt egestas quis non mauris.</span></p><pre><code class="language-plaintext">//JavaScript program to swap two variables\n\n//take input from the users\nlet a = prompt(\'Enter the first variable: \');\nlet b = prompt(\'Enter the second variable: \');\n\n//create a temporary variable\nlet temp;\n\n//swap variables\ntemp = a;\na = b;\nb = temp;\n\nconsole.log(`The value of a after swapping: ${a}`);\nconsole.log(`The value of b after swapping: ${b}`);</code></pre><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">Donec vel <strong>ante</strong> vel nulla pharetra malesuada. Sed euismod tempus rutrum. Ut aliquam tincidunt turpis a varius. </span><span style="background-color:hsl(180,75%,60%);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">Nullam</span><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;"> tristique turpis quis ante vulputate, vitae congue justo lacinia. Etiam odio magna, malesuada sit </span><span style="background-color:rgb(255,255,255);color:hsl(0,75%,60%);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">amet</span><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;"> libero nec, volutpat porta lorem. Nam vitae venenatis ante. Donec vitae sollicitudin quam, ut finibus neque. Pellentesque eu laoreet tortor. Aenean iaculis ex sed erat porttitor lobortis. Donec semper id dolor ut rhoncus. Proin hendrerit vestibulum varius. Nam orci erat, vestibulum feugiat odio ac, hendrerit pretium nunc. Nullam viverra ligula eget dolor feugiat, non imperdiet erat </span><span style="background-color:hsl(270,75%,60%);color:hsl(0,0%,100%);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">dictum</span><span style="background-color:hsl(270,75%,60%);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">.</span></p><figure class="image"><img src="https://res.cloudinary.com/dhzzrpp9c/image/upload/v1666051540/Boat_Unsplash_df0c97224a.jpg"><figcaption>Image with caption</figcaption></figure><blockquote><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat risus ex, in dignissim purus sagittis sit amet. In convallis maximus urna eget pulvinar. Phasellus a tincidunt magna. Quisquelaoreet vel leo non laoreet. Duis.&nbsp;</span></p></blockquote><p style="margin-left:40px;"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat risus ex, in dignissim purus sagittis sit amet. In convallis maximus urna eget pulvinar. Phasellus a tincidunt magna. Quisquelaoreet vel leo non laoreet.</span></p><figure class="image image-style-side"><img src="https://res.cloudinary.com/dhzzrpp9c/image/upload/v1666051540/Boat_Unsplash_df0c97224a.jpg"></figure><p style="margin-left:40px;"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:&quot;Open Sans&quot;, Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat risus ex, in dignissim purus sagittis sit amet. In convallis maximus urna eget pulvinar. Phasellus a tincidunt magna. Quisquelaoreet vel leo non laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat risus ex, in dignissim purus sagittis sit amet. In convallis maximus urna eget pulvinar. Phasellus a tincidunt magna. Quisquelaoreet vel leo non laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat risus ex, in dignissim purus sagittis sit amet. In convallis maximus urna eget pulvinar. Phasellus a tincidunt magna. Quisquelaoreet vel leo non laoreet.</span></p>',
          createdAt: "2022-10-17T23:43:36.619Z",
          allowComments: true,
          cover: {
            data: {
              id: "8",
              attributes: {
                alternativeText: null,
                url: "https://res.cloudinary.com/dhzzrpp9c/image/upload/v1666051529/Boat_Unsplash_4e715a277b.jpg",
              },
            },
          },
          categories: {
            data: [
              {
                id: "1",
                attributes: {
                  displayName: "JavaScript",
                  slug: "java-script",
                },
              },
            ],
          },
          tags: {
            data: [
              {
                id: "3",
                attributes: {
                  displayName: "Javascript",
                  slug: "javascript",
                },
              },
            ],
          },
          author: {
            data: {
              id: "2",
              attributes: {
                displayName: "Luna Santos",
                slug: "luna-santos",
              },
            },
          },
        },
      },
    ],
  },
};
