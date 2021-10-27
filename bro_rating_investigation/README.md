# Validators rating. Bro_n_Bro vision

The qualitative validator set of each network from the `cosmos` ecosystem is the guarantee of sustainability and growth for each network. Validators have to produce blocks, keep uptime, vote on proposals. In addition, validators can submit proposals, develop new projects regarding the ecosystem and contribute to it. They get commission rewards from inflation according to the number of tokens are delegated to them. Moreover, the validator's voting power increases with delegated tokens.

The question is how to develop a qualitative validator set? How to distribute tokens for the Greate Justice? These questions will be clarified in this post, partially. The provided rating should help to make decisions about delegation as for the newcomers and, also, for the oldfags.

It is a huge issue for newcomers to choose a validator from the active validator set. All data is transparent but it is complex to find all parameters and make a conclusion manually. Experience has shown, however, that most newcomers are delegating their tokens for validators from top descended by voting power with a minimal possible commission. This is not a totally wrong decision, but there are more criteria for decision-making. Let's define them:

- Base
- Reputation
- Greed
- Sustainability

These criteria are a summary of the validator activity. Validators are rated by these criteria and can get a maximum of 100 points for illustrative purposes. We can define weights for them (or shares), but before it let's dive into each criterion.

## Base

This criterion is about what the validator has to do, except produce blocks. If a validator fails to complete its base responsibilities delegators should ignore this validator for their delegations.
For the base responsibilities are mean:

- Participate in governance
- Provide information and vision about the validator

Each validator's involvement is super necessary for sustainable system growth. That is why the base criterion should be weighted for 50 points out of 100.

The following parameters with weights are defined for measuring this criterion:

- Voting on the last 5 completed proposals (45)
- Provided identity (2)
- Provided website (1)
- Provided security contact (1)
- Provided details (1)

The biggest share is on voting because it shows the real activity of validator, the rest is divided between provided info about the validator.

By completing all of these challenges, the validator can get 50 points of his rating and this is a Great step for the network and for its future growth.

## Reputation

The base is over here and the competition between validators has started.

The reputation criterion shows the current reputation of the validator and his motivation to keep the network on run. It's weighted for 15 points out of 100.

There are 3 subcriteria with weights are defined:

- Voting power (6)
- Self delegation (6)
- Min self delegation parameter (3)

The voting power subcriterion exactly shows the current reputation of the validator. The "current" reputation is mean the reputation before that post.  Self delegation shows the involvement of the validator in network development. Finally, the min self delegation parameter shows possible future behaviour.

## Greed

Here is defined how to manage with the validator's commission. A lot of newcomers are delegating their tokens to validators with zero commission fees and this is a great delusion. It is hard to argue against that the maintaining of secure and sustainable validator architecture needs tokens. The zero-fee commission rate hype is most often on the network launch. This is some kind of ad, to get as many tokens as it is possible. In the end, the commission rate is increased and delegations are partially kept on validators explained above.

This behavior is normal, but if long-term network health is considered, zero-fees show the validator's misunderstanding of the node architecture maintenance costs.

On the other hand, the overrated commission steals inflation rewards from delegators.

The best way to manage this out is to sort validators by their commission from the median value ascending and then add validators with low than median commission value descending.

This criterion is weighted for 10 points out of 100.

The following parameters with weights are defined for measuring this criterion:

- Commission rate (5)
- Max commission rate (3)
- Max commission rate change (2)

Mostly, about commission rate is described above. The max commission rate and the max commission rate change parameters show the validator's possible behavior in the future. Obviously, the fewer these parameters value the better. In the case with commission rate and the max commission rate, ascending from the median.

## Sustainability

Last but not least criterion. It shows the availability of the validator-provided infrastructure. It is easy to measure by pre-commits count

This criterion is weighted for 25 points out of 100. The following parameters with weights are defined for measuring this criterion:

- Pre-commits count at 100,000 blocks window (15)
- A tokens bluring parameter (10)

The pre-commits count is a subcriterion that is defined as a relation between validator unique/block pre-commits to blocks amount(100,000). The tokens blurring parameters shows lost tokens as a result of slashing and it is defined as a relation between delegated tokens on validator or `tokens` parameter and `delegator_shares` parameter of the validator. In other words, this subcriterion should be equal to 1, if it is less than 1 it means tokens were slashed.

## Calculations(WIP)

Calculations are separate for each subcriterion.

## The network health(WIP)

## Conclusion (WIP)

> results

Clear and honest validators rating is super necessary for the network health. The criteria for measuring were defined in this post.

> add about more than 1 validator
> think where investing 