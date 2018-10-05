import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const MainPageTemplate = ({ intro, menus }) => {
  console.log(intro, menus)
  return null;
}

MainPageTemplate.propTypes = {
  intro: PropTypes.string,
  menus: PropTypes.array,
}

const MainPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <MainPageTemplate
      intro={frontmatter.intro}
      menus={frontmatter.menus}
    />
  )
}

MainPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MainPage

export const mainPageQuery = graphql`
  query MainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        introduction
        menus {
          dishes {
            name
            price
          }
        }
      }
    }
  }
`
