import React from 'react'
import MyInput from './Ui/input/MyInput'
import MySelect from './Ui/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
		<MyInput
			placeholder = "search"
			value = {filter.query}
			onChange = {e => setFilter({...filter, query: e.target.value})}
		/>
		<MySelect
		    value = {filter.sort}
		    onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
		    defaultValue="sorting"
		    options = {[
		    	{value: "title", name: "by name"},
		    	{value: "body", name: "by description"}
		    ]}
		/>
		</div>
  )
}

export default PostFilter