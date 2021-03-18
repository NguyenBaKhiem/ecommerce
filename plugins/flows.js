// import AuthenticationModal from '~/components/modals/AuthenticationModal'

export default ({ app }, inject) => {
  const flows = {}

  // flows.login = ({ parent }) => {
  //   return app.$dialogs.open({
  //     parent,
  //     component: AuthenticationModal
  //   })
  // }

  inject('flows', flows)
}
