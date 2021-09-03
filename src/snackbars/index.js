import { SnackbarProgrammatic as Snackbar } from 'buefy'

var snackbars = {
    errorWarning() {
        Snackbar.open({
            message: 'Oops, something went wrong! Try again later',
            type: 'is-warning',
            position: 'is-top',
            actionText: 'Ok',
            indefinite: false,
        })
    },
    successAddAnime() {
        Snackbar.open({
            message: 'Anime added correctly to your profile!',
            type: 'is-success',
            position: 'is-top',
            actionText: 'Ok',
            indefinite: false,
        })
    },

}

export default snackbars