import React from 'react'
import * as Bootstrap from '@bootstrap-styled/v4'
import styled from 'styled-components'

const Input = styled(Bootstrap.Input)`
    background: transparent;
    border: none;
    color: #777;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    padding: 5px;
    width: 100%;

    &:focus {
        outline: none;
    }
`

const Li = styled(Bootstrap.Li)`
    margin: 3px 10px 3px 0;
`

const LiTags = styled(Li)`
    border: 1px solid #eceeef;	
    background-color: #f3f3f3;
    padding: 3px 5px;
`

const LiInput = styled(Li)`
    flex: 2;
`

const Ul = styled(Bootstrap.Ul)`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    margin: 0;
    list-style: none;
    align-items: center;
    box-sizing: border-box;
`

const Card = styled(Bootstrap.Card)`
    width: 100%;
    max-height: 120px;	
    overflow: scroll;
`

const TagsInput = ({ tags, onChange, placeHolder }) => {

    const stopPropagationThen = func =>
        e => {
            e.stopPropagation()
            func(e)
        }

    const onKeyDown = e => {
        if (e.keyCode === 13 && e.target.value !== "") {
            onChange && onChange([...tags, e.target.value])
            e.target.value = ""
        }
        if (e.keyCode === 8 && tags.length !== 0 && e.target.value === "") {
            onChange && onChange([...tags.slice(0, tags.length - 1)])
            e.target.value = ""
        }
    }

    const removeTag = tag =>
        _ => onChange(tags.filter(t => t !== tag))

    return (
        <Card>
            <Ul tag="div">
                {tags.map((tag, i) =>
                    <LiTags
                        key={`${tag}_${i}`}
                        onClick={stopPropagationThen(removeTag(tag))}>
                        {tag}
                    </LiTags>)
                }
                <LiInput>
                    <Input
                        onChange={stopPropagationThen(() => { })}
                        onKeyDown={stopPropagationThen(onKeyDown)}
                        placeholder={placeHolder ?? "Add Item"}>
                    </Input>
                </LiInput>
            </Ul>
        </Card>
    )
}

export default TagsInput