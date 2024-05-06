document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('input[type="radio"]')
  const slider = document.querySelector('.bannerIMG')
  
  buttons.forEach(button => {
    button.addEventListener('change', function() {
      const value = parseInt(button.value)
      slider.style.transform = `translateX(-${(value - 1) * 33.5}%)`
    })
  })
})


document.addEventListener("DOMContentLoaded", function(){
  let slide = 0
  let time = 3000
  const slider = document.querySelector('.bannerIMG')
  const buttons = document.querySelectorAll('input[type="radio"]');
  
  function nextSlide(){
    slide = (slide + 1) %
    slider.children.length;
    slider.style.transform = `translateX(-${slide * 33.5}%)`
    buttons.forEach((button, index) => {
      if(slide === index){
        button.checked = true
      }else{
        button.checked = false
      }
    })
  } setInterval(nextSlide, time)
})

function buttonNext() {
  const community = document.getElementById('community')
  community.scrollIntoView({ behavior : 'smooth'})
}

function buttonHome(){
  const home = document.getElementById('home')
  home.scrollIntoView({behavior : 'smooth'})
}

function buttonTools(){
  const tools = document.getElementById('tools')
  tools.scrollIntoView({behavior : 'smooth'})
}

document.getElementById('blogButton').addEventListener("click", function() {
  window.location.href = "blog.html";
});

document.getElementById('minecraftDownload').addEventListener("click", function() {
  window.location.href = "https://files.an1.co/minecraft_1.20.81.01-an1.com.apk";
});

document.getElementById('discord').addEventListener("click", function(){
  window.location.href = "https://discord.com/invite/T7e4tqrj"
})

document.getElementById('whatsapp').addEventListener("click", function(){
  window.location.href = "https://chat.whatsapp.com/FrvXunPKPJS3Bdpa5kgrfD"
})

document.getElementById("salinAddress").addEventListener('click', function() {
  const textCopy = "darkenz.aternos.me"
  navigator.clipboard.writeText(textCopy)
})
document.getElementById("salinPort").addEventListener('click', function() {
  const textCopy = "17717"
  navigator.clipboard.writeText(textCopy)
})
