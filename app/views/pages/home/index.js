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

let old_balance = 10360.87
const account_balance = new CountUp('account-balance', 0, old_balance, 2, 1.5, {
  useEasing:   true, 
  useGrouping: true, 
  separator:   ',', 
  decimal:     '.', 
  prefix:      '$', 
})
account_balance.start()

setInterval(() => {
  let new_value = Math.random() > 0.5
    ? old_balance += Math.random() * 30
    : old_balance -= Math.random() * 10

  account_balance.update(new_value)
  old_balance = new_value
}, 3000)

$('.menu.icon').on('click', e =>
  $('aside').setAttribute('in', ''))

$('.backdrop').on('click', e =>
  $('aside').removeAttribute('in'))

let old_val = 3997.96
const eth_balance = new CountUp('ethereum', old_val, old_val, 2, 1.5, {
  useEasing:   true, 
  useGrouping: true, 
  separator:   ',', 
  decimal:     '.', 
  prefix:      '$', 
})

setInterval(() => {
  let new_value = Math.random() > 0.5
    ? old_val += Math.random() * 2
    : old_val -= Math.random() * 1

  eth_balance.update(new_value)
  old_val = new_value
}, 3000)

let old_bit_val = 8332.61
const bit_balance = new CountUp('bitcoin', old_bit_val, old_bit_val, 2, 1.5, {
  useEasing:   true, 
  useGrouping: true, 
  separator:   ',', 
  decimal:     '.', 
  prefix:      '$', 
})

setInterval(() => {
  let new_value = Math.random() > 0.5
    ? old_bit_val += Math.random() * 3
    : old_bit_val -= Math.random() * 1

  bit_balance.update(new_value)
  old_bit_val = new_value
}, 3000)

let old_balance_val = 36.97
const diff_balance = new CountUp('diff', 0, old_balance_val, 2, 1.5, {
  useEasing:   true, 
  useGrouping: true, 
  separator:   ',', 
  decimal:     '.', 
  prefix:      '$', 
})
diff_balance.start()

setInterval(() => {
  let new_value = Math.random() > 0.5
    ? old_balance_val += Math.random() * 3
    : old_balance_val -= Math.random() * 1

  diff_balance.update(new_value)
  old_balance_val = new_value
}, 3000)

