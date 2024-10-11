import React, { FC, useEffect, useState } from 'react'
import styles from './form.module.scss'
import { ITextEditor } from './form.interface'
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'
import cn from 'classnames'
import { Editor } from 'react-draft-wysiwyg'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
const TextEditor: FC<ITextEditor> = ({
	onChange,
	value,
	placeholder,
	error,
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())

	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (isUpdated) return

		const defaultValue = value || ''
		const blocksFromHtml = htmlToDraft(defaultValue)

		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		)

		const newEditorState = EditorState.createWithContent(contentState)
		setEditorState(newEditorState)
	}, [value, isUpdated])

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setEditorState(editorState)

		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}
	return (
		<div className={cn(styles.common, styles.editorWrapper, 'animate-fade')}>
			<label>
				<span>{placeholder}</span>
				<div className={cn(styles.wrapper, 'text-white border-white')}>
					<Editor
						toolbarClassName="styles.toolbar"
						editorClassName="styles.editor"
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						// toolbar={{}}
					/>
				</div>
				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		</div>
	)
}

export default TextEditor
