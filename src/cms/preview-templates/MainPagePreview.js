import React from 'react'
import PropTypes from 'prop-types'
import { MainPageTemplate } from '../../templates/main-page'

const MainPagePreview = ({ entry }) => {
  const entryMenus = entry.getIn(['data', 'menus', 'dishes'])
  const menus = entryMenus ? entryMenus.toJS() : []

  return (
    <MainPageTemplate
      intro={entry.getIn(['data', 'intro'])}
      menus={menus}
    />
  );
}

MainPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MainPagePreview
