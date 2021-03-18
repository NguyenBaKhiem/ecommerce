import variablesjs from '@/assets/variablesjs.scss'

export default function ({ app }, inject) {
  console.log(variablesjs)
  inject('variablesjs', variablesjs)
}
