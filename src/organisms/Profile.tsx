import React from 'react'
import styled from 'styled-components'

import Emoji from '../atoms/Emoji'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`

const Item = styled.li`
  font-size: 1.4rem;
  padding: 0.2em 0;
`

const LabeledEmoji = styled(Emoji)`
  margin-right: 1.1em;
`

const Career = styled.p`
  color: #777;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.8em;
  margin: 3em 1em 0;
`

export default function Profile() {
  return (
    <Content>
      <ul>
        <Item>
          <LabeledEmoji symbol="📛" /> Ryo Adachi
        </Item>
        <Item>
          <LabeledEmoji symbol="👨‍💻" /> Lead Engineer
        </Item>
        <Item>
          <LabeledEmoji symbol="🏢" /> Connehito Inc.
        </Item>
        <Item>
          <LabeledEmoji symbol="📍" /> Tokyo, Japan
        </Item>
      </ul>

      <Career>
        2012年にSIerに新卒で入社、EdTech関連事業や大手ECサービスのWeb開発やiOSアプリなどの開発を経験。
        2016年からはコネヒト株式会社にWebアプリケーションエンジニアとして入社し、女性向けメディア・アプリ「ママリ」のWeb開発を担当。
        現在はリードエンジニアとして組織の技術面でのサポートやチーム開発における開発効率の改善などを推進。
      </Career>
    </Content>
  )
}
