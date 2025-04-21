function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }
}

//pegar a tag img

// se tiver light mode, adicionar a imagem light
// substituir sem 