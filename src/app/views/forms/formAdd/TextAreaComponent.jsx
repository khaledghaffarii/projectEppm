import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

 class TextAreaComponent extends React.Component  {
	handleEditorChange = (content, editor) => {
		console.log(content);
		return content;
	  }
	render() {
		return (
			<Editor
			//initialValue= {this.content}
			init={{
			  height: 500,
			  menubar: false,
			//   plugins: [
			// 	'advlist autolink lists link image charmap print preview anchor',
			// 	'searchreplace visualblocks code fullscreen',
			// 	'insertdatetime media table paste code help wordcount'
			//   ],
			//   toolbar:
			// 	'undo redo | formatselect | bold italic backcolor | \
			// 	alignleft aligncenter alignright alignjustify | \
			// 	bullist numlist outdent indent | removeformat | help'
			}}
			onEditorChange={this.handleEditorChange}
		  />
		);
	  }
	}

export default TextAreaComponent
