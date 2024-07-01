import { useRouter } from 'vue-router'
import { useUserStore } from '~/store/user'
import { useNuxtApp } from '#app'

export default function useLogout() {
  const { $api } = useNuxtApp()
  const router = useRouter()
  const userStore = useUserStore()

  const handleLogout = async (): Promise<void> => {
    console.log('ログアウトを開始します')
    try {
      const accessToken = localStorage.getItem('access_token')
      if (!accessToken) {
        console.warn('アクセストークンが見つかりません')
        await performLocalLogout()
        return
      }

      try {
        await $api.logout.$post({
          config: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          },
        })
        console.log('ログアウトAPIの呼び出しに成功しました')
      } catch (apiError: any) {
        console.warn('ログアウトAPIの呼び出しに失敗しました:', apiError)
        if (
          apiError.response &&
          (apiError.response.status === 401 || apiError.response.status === 400)
        ) {
          console.log(
            'サーバーでのログアウトに失敗しましたが、ローカルでのログアウトを続行します。'
          )
        } else {
          throw apiError
        }
      }

      await performLocalLogout()
    } catch (error) {
      console.error('ログアウト処理中にエラーが発生しました:', error)
    }
  }

  const performLocalLogout = async (): Promise<void> => {
    userStore.clearUser()
    localStorage.removeItem('access_token')
    sessionStorage.clear()
    await router.push('/login')
    console.log('ログアウトが完了しました')
  }

  return { handleLogout }
}
