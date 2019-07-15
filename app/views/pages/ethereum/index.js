import 'ragrid'
import 'CSS/tools/utilities.css'
import 'CSS/generic/typography.css'
import 'CSS/elements/body.css'
import 'CSS/elements/nav.css'
import 'CSS/elements/figure.css'
import 'CSS/elements/button.css'
import 'CSS/elements/section.css'
import 'CSS/elements/main.css'
import 'CSS/components/menu.css'
import 'CSS/components/avatar.css'
import 'CSS/components/icon.css'
import 'CSS/components/balance.css'
import 'CSS/components/actions.css'
import 'CSS/components/currency-list.css'
import 'CSS/trumps/ios.css'

import { $ } from 'blingblingjs'
import CountUp from 'countup'

// new CountUp('account-balance', 0, 4.5306, 4, 1.5, {
//   useEasing:   true, 
//   useGrouping: true, 
//   separator:   ',', 
//   decimal:     '.', 
//   prefix:      '', 
//   suffix:      ' ETH',
// }).start()

let old_val = 3997.96
const eth_balance = new CountUp('diff', 0, old_val, 2, 1.5, {
  useEasing:   true, 
  useGrouping: true, 
  separator:   ',', 
  decimal:     '.', 
  prefix:      '$', 
})
eth_balance.start()

setInterval(() => {
  let new_value = Math.random() > 0.5
    ? old_val += Math.random() * 3
    : old_val -= Math.random() * 1

  eth_balance.update(new_value)
  old_val = new_value
}, 3000)