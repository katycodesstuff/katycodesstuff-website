import DefaultPage from "../components/DefaultPage/DefaultPage"

interface Props {}

function NotFound(props: Props) {
    const {} = props

    return (
        <DefaultPage>
        <p>Oops, this page doesn't exist.</p>
        </DefaultPage>
    )
}

export default NotFound
