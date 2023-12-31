const cores = [
    '#000000', '#1C1C1C', '#363636', '#4F4F4F', '#696969', '#808080', '#A9A9A9', '#C0C0C0', '#D3D3D3', '#DCDCDC',
    '#6A5ACD', '#836FFF', '#6959CD', '#483D8B', '#191970', '#000080', '#00008B', '#0000CD', '#0000FF', '#6495ED',
    '#4169E1', '#1E90FF', '#00BFFF', '#87CEFA', '#87CEEB', '#ADD8E6', '#4682B4', '#B0C4DE', '#708090', '#778899',
    '#00FFFF', '#00CED1', '#40E0D0', '#48D1CC', '#20B2AA', '#008B8B', '#008080', '#7FFFD4', '#66CDAA', '#5F9EA0',
    '#2F4F4F', '#00FA9A', '#00FF7F', '#98FB98', '#90EE90', '#8FBC8F', '#3CB371', '#2E8B57', '#006400', '#008000',
    '#228B22', '#32CD32', '#00FF00', '#7CFC00', '#7FFF00', '#ADFF2F', '#9ACD32', '#6B8E23', '#556B2F', '#808000',
    '#BDB76B', '#DAA520', '#B8860B', '#8B4513', '#A0522D', '#BC8F8F', '#CD853F', '#D2691E', '#F4A460', '#FFDEAD',
    '#F5DEB3', '#DEB887', '#D2B48C', '#7B68EE', '#9370DB', '#8A2BE2', '#4B0082', '#9400D3', '#9932CC', '#BA55D3',
    '#A020F0', '#8B008B', '#FF00FF', '#EE82EE', '#DA70D6', '#DDA0DD', '#C71585', '#FF1493', '#FF69B4', '#DB7093',
    '#FFB6C1', '#FFC0CB', '#F08080', '#CD5C5C', '#DC143C', '#800000', '#8B0000', '#B22222', '#A52A2A', '#FA8072',
    '#E9967A', '#FFA07A', '#FF7F50', '#FF6347', '#FF0000', '#FF4500', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00',
    '#F0E68C', '#F0F8FF', '#F8F8FF', '#FFFAFA', '#FFF5EE', '#FFFAF0', '#F5F5F5', '#F5F5DC', '#FDF5E6', '#FFFFF0',
    '#FAF0E6', '#FFF8DC', '#FAEBD7', '#FFEBCD', '#FFE4C4', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFDAB9',
    '#FFE4B5', '#EEE8AA', '#FFE4E1', '#FFF0F5', '#E6E6FA', '#D8BFD8', '#F0FFFF', '#E0FFFF', '#B0E0E6', '#E0FFFF',
    '#F0FFF0', '#F5FFFA'
  ];
  
  
  let corEscolhida;
  let tentativas = 0;
  const MAX_TENTATIVAS = 3;
  
  function escolherCoresAleatorias() {
    const coresAleatorias = [];
    for (let i = 0; i < 10; i++) {
      const indiceAleatorio = Math.floor(Math.random() * cores.length);
      coresAleatorias.push(cores[indiceAleatorio]);
    }
    return coresAleatorias;
  }
  
  function exibirCoresSelecionadas() {
    if (tentativas >= MAX_TENTATIVAS) {
      alert('Game Over');
      return;
    }
  
    const coresSelecionadas = escolherCoresAleatorias();
    const colorsDiv = document.getElementById('colors');
    colorsDiv.innerHTML = '';
  
    coresSelecionadas.forEach(cor => {
      const colorBox = document.createElement('div');
      colorBox.style.backgroundColor = cor;
      colorBox.classList.add('color-box');
      colorBox.addEventListener('click', function() {
        verificarCor(cor);
      });
      colorsDiv.appendChild(colorBox);
    });
  
    corEscolhida = coresSelecionadas[Math.floor(Math.random() * 10)];
    console.log('Cor escolhida:', corEscolhida);
  }
  
  function verificarCor(corSelecionada) {
    if (corSelecionada === corEscolhida) {
      document.body.style.backgroundColor = corEscolhida;
      alert('Parabéns! Você acertou a cor!');
    } else {
      tentativas++;
      if (tentativas >= MAX_TENTATIVAS) {
        alert('Game Over, Atualize a pagina e tente novamente',corEscolhida);
      } else {
        alert(`Ops! Tentativa ${tentativas}/${MAX_TENTATIVAS}. Tente novamente.`);
      }
    }
  }
  
  function escolherCor() {
    document.body.style.backgroundColor = '#FFFFFF';
    tentativas = 0;
    exibirCoresSelecionadas();
  }
  
  window.onload = function() {
    exibirCoresSelecionadas();
  };
  