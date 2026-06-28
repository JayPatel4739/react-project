import ReactMarkdown from 'react-markdown'

export default function RecipeShow(props){
    return(
        <>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </>
    )
}