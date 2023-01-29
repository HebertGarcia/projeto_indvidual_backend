import inquirer from 'inquirer'
import chalk from 'chalk'



let array = ["align-content", "background-image", "border-radius", "container-type", "display"]

mylist()

function mylist() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'ESCOLHA AS OPÇÕES:',
          choices: [
            'Exibir lista das propriedades CSS ordenadas de A-Z',
            'Adicionar propriedades CSS',
            'Remover propriedades CSS',
            'Sair',
          ],
        },
      ])
      .then((answer) => {
        let action = answer['action']
  
        if (action === 'Exibir lista das propriedades CSS ordenadas de A-Z') {
            showList()
        } else if (action === 'Adicionar propriedades CSS') {
            insertProperties()
        } else if (action === 'Remover propriedades CSS') {
            removeProperties()
        } else if (action === 'Sair') {
            console.log('Sair')
            sair()
           
        }
      })
  }

  function back(){
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'back',
          message: 'Deseja voltar?',
          choices: [
            'Sim',
            'Não',
          ],
        },
      ])
      .then((answer) => {
        let back = answer['back']
  
        if (back === 'Sim') {
            mylist()
        } else if (back === 'Não') {
            console.log('Sair')
            sair()   
        }
      })
  }

  function showList(){
    console.log("lista CSS:", array.sort())
    back()                                            

  }

  function insertProperties() {
    inquirer
      .prompt([
        {
          name: 'insert',
          message: 'Digite uma propriedade CSS:',
        },
      ])
      .then((answer) => {
        let propertiesCSS = answer['insert']
  
        if (!array.includes(propertiesCSS)) {
          array.push(propertiesCSS)
          console.log(chalk.green('Propriedade CSS inserida!'))
          console.log("lista CSS:", array.sort())
          return back()
        }
        else{
          console.log(chalk.bgRed.black('Esta propriedade já foi adicionada. Escolha outra!'))
          insertProperties()
        }
      })
  }

  function removeProperties(){
    inquirer
      .prompt([
        {
          name: 'remove',
          message: 'Digite uma propriedade CSS a ser removida:',
        },
      ])
      .then((answer) => {
        let removeCSS = answer['remove']
      
        if (array.includes(removeCSS)) {
          let findFor = removeCSS
          let index = array.indexOf(findFor);
          while(index >= 0){
            array.splice(index, 1);
            index = array.indexOf(findFor);}

          console.log(chalk.bgGreen.black('Propriedade CSS removida com sucesso!!!'))
          console.log("lista CSS:", array.sort())
          return back()
        }
        else {
          console.log(chalk.bgRed.black('Esta propriedade já foi removida. Escolha outra!'))
          console.log("lista CSS:", array.sort())
          return back()
        }
      })
   }

  function sair(){
    console.log("lista CSS:", array.sort())
    console.log(chalk.bgYellow.black('OBRIGADO E VOLTE SEMPRE !!!'))
    process.exit()

  }

 