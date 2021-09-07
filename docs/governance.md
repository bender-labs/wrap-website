# Wrap Governance


### Overview
Community by Community is the initiative of the Wrap Protocol to create a decentralized autonomous organization (DAO) for the Wrap Protocol. The Wrap DAO is made up of the community of Wrap stakeholders and allows stakeholders to bring up, vote and integrate proposals to the Wrap Protocol.
The Wrap DAO leverages four key elements to allow wrap stakeholders to govern the protocol:

##### WRAP
WRAP is the governance token of the Wrap Protocol. It will be required to author a proposal and vote on proposals through Tezos Homebase.

##### Tezos Homebase
Tezos Homebase is an on-chain platform where Wrap Stakeholders will voice and vote on their proposals. Tezos Homebase leverages the BaseDAO smart contract framework to create a similar environment to platforms like snapshot on Tezos. Find out more about the Tezos Homebase through their Medium or through their Github.

##### Wrap Governance Discourse
The Discourse Forum held to govern Wrap is the Bender Labs Discourse available is a Discourse Forum where Wrap stakeholders will outline, explain and discuss proposals posted on Tezos Homebase. This Discourse is owned by the Wrap Community and will be monitored directly by the Bender Labs Community Team

##### The Wrap Board

The Wrap Board is a set of 11 important stakeholders of the Wrap Protocol that will materialize proposals supported by the community by implementing solutions and amendments to Wrap Protocol.
These four elements come together to form a systemized proposal, voting and implementation and create the Wrap DAO.

### Wrap DAO on Tezos Homebase

The Wrap DAO needs a platform where users can vote on proposals to amend the protocol. On Tezos, the best place to do this is Tezos Homebase. 

The Tezos Homebase app was built by TQ Tezos to create governance structures on Tezos.

**Proposal Framework**\
A BaseDAO proposal can be simple like transferring funds to an address or creating an entirely new set of rules for the protocol. Proposal cycles are split into two periods:
Proposal period where users who stake assets submit their proposals for the protocol
A voting period where voters who have staked assets vote to support or oppose a proposal

__How a proposal works__
- Step 1: During the proposal period, anyone writes down proposal details and adds a proposal to the list of proposals on Homebase along with a freeze on a certain number of tokens.

- Step 2: When the proposal cycle ends, the voting cycle begins and users vote on supporting or opposing the proposal (votes are a function of staked tokens)

- Step 3: For a proposal to pass, the Quorum Threshold must be met and a majority of votes must be supportive. All other outcomes will lead to the failure of a proposal. 

__DAO Parameters__\
The Wrap DAO has specific parameters chosen to make the Wrap DAO on Tezos Homebase a success including: 

- Proposal period duration
Definition: How long (days) the period where users vote on current proposals lasts\
Elected Parameter: 7 days\
Justification: We chose a weekly schedule to allow for an easy and fluid workflow and keep things consistent with other Wrap Protocol schedules (e.g distribution).

- Voting period duration
Definition: How long (days) the period where users vote on current proposals lasts
Elected Parameter: 7 days
Justification: We chose a weekly schedule to allow for an easy and fluid workflow and keep things consistent with other Wrap Protocol schedules (e.g distribution).

- Required Stake
Definition: Required stake to be able to make a proposal\
Elected Parameter: 500 WRAP\
Justification: A proposal fee ensures proposals are legitimate and well thought out

- Minimum support to pass
Definition: The smallest percentage of support necessary for a proposal to be considered passed or accepted\
Elected parameter: 75%\
Justification: Our threshold allows for a large majority of the community to agree on the decision and a limited amount of accepted proposals to ensure follow-through for the ones that are accepted

- Returned stake after proposal rejection (%)
Definition: The % of tokens returned to the user after his proposal is rejected\
Elected Parameter: 90%\
Justification: We want to disincentivize illegitimate proposals but keep proposals coming!

- Quorum Threshold
Definition: A natural number representing the number of votes required for a proposal to pass (each token staked in vote represents a vote)\
Elected Parameter: 5000 WRAP

These parameters are flexible and can be changed through community proposals or at the discretion of the Bender Labs team to ensure the fairness of the governance process.

### Wrap Governance Discourse

**What is the Wrap Governance Discourse?**\
A discourse forum intended for governance-related discussions.
Specifically, the governance Discourse for Wrap will serve as a forum to gauge community interest in a proposal and discuss ongoing proposals and their solution. All proposals on Tezos Homebase should link their corresponding post and previous posts initiated on the Wrap GovernanceDiscourse.

**Categories & Purpose**

**Heat Checks**\
A Heat Check is a post that serves to establish if there is enough will to change the current status quo. All Heat Checks will be titled: "HeatCheck - Name of Proposal" and will be posted along with a corresponding Homebase post for token weighted voting. Should a proposal require the community to vote on a variety of solutions (e.g %fees distributed to WRAP holders), the options should be listed in the Heat Check on Discourse for the community to vote on the Discourse Proposal.

**Proposal Discussion**\
A Proposal Discussion follows a Heat Check. A Proposal Discussion allows for the formalization of a solution to previous posts. All Proposal Discussion posts will be titled: "Proposal Discussion - Name of proposal" and will be posted along with a corresponding Homebase post for token weighted voting. All Proposal Discussions on Discourse and Homebase should link their preceding Heat Check on Discourse and corresponding Homebase Proposal, should they fail to do so they will be deleted by the moderators. All developers with the technical solutions they propose should link their code to the Proposal Discussion on Homebase and Discourse. 

**Governance Proposal**\
A Governance Proposal, is used for Wrap Board Committee members to announce the implemented solution if already implemented or outsource the solution to External Devs in exchange for WRAP rewards. All links to previous posts and proposals will be linked in the Governance Proposal.\
\
Monitored entirely by Bender Labs, rules of engagement are laid out ahead of time and Bender Labs Community team monitors the board entirely. These three categories fit into the proposal Process outlined below in this document. 


### The Wrap Board

**What is the Wrap Board?**\
The Wrap Board is a set of invested Wrap Community Members that share a vision of success for the Wrap Protocol. These members are elected by the Bender Labs Team and invited to be added to a sub-community known as the Wrap Board Committee. Specifically, a Discord channel  will be created to hold discussions internal to the committee. The members of the Wrap Board are a select few meant to represent the larger Wrap Community as well as their own personal voice.

**What are the objectives of the Wrap Board?**\
The primary goal of the Wrap Board is to bring proposals brought up by the community on Homebase to integration.\
The Wrap Board will provide an implementation structure for the self-governance of the WrapProtocol by Wrap stakeholders.

**Wrap Board Voting Process**\
The Wrap Board will come together in the form of a systemized voting process to pass community proposals to be integrated.\
Following a Tezos Homebase voting cycle, on a weekly basis

* Wrap Board Members will begin their voting cycle and vote to elect the proposal(s) supported during the previous Tezos Homebase voting cycle they would like to see implemented to amend the Wrap Protocol. For a proposal to pass this stage, support within the Wrap Board must be greater than 50%.

* The Wrap Board will vote to choose the bounties to reward the authors of the proposals as well as their size. Bounties will be awarded in WRAP tokens.

* Should the Wrap Board decide to accept a HomeBase proposal, it will be brought to development, testing, and integration phases


**Development, Testing & Integration**

* Development: Should the code to integrate the proposal to the Wrap Protocol already be included in the proposal, the technical solution provided by the author will be used. Otherwise, a developper will be outsourced if necessary.
* Testing: The code will be tested and verified by members of the Bender Labs team and other developers. Bounties to find bugs may also be available to developers able to spot a bug in the implementation. Should no bug be found the bounty will be returned to the original developer.
* Integration: Should the testing phase be successful the changes will be made to the Protocol. The developer will be rewarded for his efforts in the form of WRAP tokens according to the preset bounty on a first solution first serve basis along with the initial author of the proposal.

Should an external developer not be necessary for the proposal to go through, the proposal will be handled by the Bender Labs team, and any WRAP token reward will be disbursed only to the author of the proposal 


**Wrap Board Members** \
The Wrap Board will initially begin with 11 members, all of which will at first be elected internally by the Bender Labs team.

The first member (1) of the Wrap Board will be Hugo Renaudin, the founder of Bender Labs and the Wrap Protocol:
* Hugo Renaudin 

Hugo's voice is not a necessary requirement for a proposal to pass but he can step into the voting process should he deem it necessary to do so.

The second member (1) of the Wrap Board will be one of the main developers of the Wrap Protocol:
* Charles Couillard 

Having a main dev as a voice in the Wrap Protocol allows for a technical perspective on solutions proposed by the Wrap Board

The next two members (2) of the Wrap Board will be two members of the Signers Quorum elected by the Bender Labs Team.
* Quorum member A
* Quorum member B 

These members are key to the Wrap Board as they will help to give perspectives on technical implementations and are at the heart of the protocol.

The third and fourth members (2) of the Wrap Board will be the Bender Labs Community team, specifically:
* Alex Arriaga
* Stanislas Motte 

This allows Bender Labs to keep an important presence and say in the decisions made by the Wrap Board. These two members are subject to change internally based on the current leaders of the Community Team at Bender Labs.

Lastly, the Wrap Community Wrap Board members (5) are elected by the Bender Labs Community Team at first according to their interest and commitment to the Wrap Protocol.

* Wrap Board Member 1
* Wrap Board Member 2
* Wrap Board Member 3
* Wrap Board Member 4
* Wrap Board Member 5

In order for a community member to be eligible for the Wrap Board, they must satisfy the following requirements:

- Be an active participant in the Wrap Community
- Have the best interest of the Wrap Community and the success of Wrap Protocol at heart

**Wrap Board Member Rotation** \
The Wrap Board will hold a board member vote on a quarterly basis where Wrap Board committee seats will be up for grabs.

Certain members of the Wrap Board including:

* Hugo Renaudin
* Bender Main Dev (Charles Couillard)
* Bender Labs Community Team member 1 
* Bender Labs Community Team member 2

cannot be voted out of the Wrap Board by community members.

Two Quorum members must also be present in the Wrap Board at all times, although the Quorum members can change.

**Wrap Community Member Election** \
Wrap Community Members of the Wrap Board will be elected on a quarterly basis.
Wrap Community Members of the Wrap Board can be voted back into the Wrap Board or voted out of the Wrap Board by the community in the following fashion:

1. Two weeks before the election, a series of potential members (chosen by Bender Community Team) and the current members will be contacted to be informed of the vote.

2. A week before the vote, the Bender Labs team will provide a voting interface with all names up for the election of the next Wrap Board and the community will vote on their preferred outcome

3. New Wrap Board members will be chosen based on the voting outcome.

Note that at any time the Bender Labs Wrap Board members can choose to replace a Wrap Board member. The Board Vote will only happen once a quarter.

**Wrap Board Member Rules** \
A Wrap Board member deemed inactive or a nuisance to the committee by the Bender Labs Community Team will:

- Be removed from the Wrap Board Channel
- Lose all Wrap Board member rights and privileges

Warnings will be issued before such an event can happen.

**Board Benefits** \
Wrap Board Committee members are extremely valuable to Wrap Governance and the Wrap Protocol more generally!
Exclusive content, merchandise, and giveaways will be held to reward Wrap Board members for their efforts to ameliorate the protocol in the form of:

- WRAP token rewards
- Bender Labs NFTs
- Official Bender Labs merchandise
- Participation rewards
- If you have been elected as a Wrap Board Committee member, make sure to lookout for these!

### Proposal Process

**Stage 1: Heat Check - Discourse & Homebase**
The Heat Check is meant to gauge the interest of the community on a certain topic.
During the proposal phase on Tezos Homebase, anyone can:

1. Submit a Temperature Check Post on Discourse

2. Post a Heat Check post on the BenderLabs Discourse titled “Heat Check: Proposal Title” to ask a general non-bias questions and explain the reasoning proposal as well as potential solutions.

3. Submit a corresponding Proposal on Tezos Homebase with a link to the Discourse post to allow the community to vote. Should Quorum Threshold (WRAP) and Minimum Support (%) be met, the Proposal will go through to the next stage.

Heat Check Guidelines: \
Heat Checks are part of the first stage of the proposal process and are meant only to measure the interest of community members on the specific proposal. 
Community members are encouraged to discuss Heat Checks and alternative solutions on the Discourse.
Should the author of the proposal have multiple potential solutions, they may run polls on the Discourse to determine the community’s preferred outcome.
Should the author be able to implement code for the solution themself, they may make the community aware of that in this post. Members who pass the first stage will be awarded status as a proposer.


**Stage 2: Proposal Discussion - Discourse & Homebase**

The Proposal Discussion is meant to formalize the Temperature Check by providing further details on the solutions as well as create community consensus over the exact solution to be implemented.

During a proposal phase on Tezos Homebase, the author of the corresponding temperature check can:

1. Submit a Proposal Discussion post on Discourse

2. Post a Proposal Discussion post on Provide a clear implementable solution

3. Submit a corresponding Tezos Homebase Proposal with link to Discourse Proposal Discussion and previous Heat Check Discourse and Tezos Homebase proposal. Should Quorum Threshold and Minimum Support (%) be met, the Proposal will go through to the next stage.

Proposal Discussion Guidelines: \
Proposal Discussions are meant to propose a community proposal along with an exact implementable solution should the proposal be supported.
Wrap Community members are encouraged to to discuss Proposal Discussions
An iteration of a Proposal Discussion discussing the same premise with a slightly different solution can be made directly without need for a new Heat Check if the correctly links are provided in the proposal and Discourse post.

**Stage 3: Wrap Board Implementation** \
During every voting cycle on Tezos Homebase, The Wrap Board committee will:

1. Vote internally to pass the proposal submitted by the community, unless a technical issue arises

2. Implement the change or establish rewards to outsource the technical solution to an external developer (a member of the Wrap Community able to implement the solution)

3. Post a Governance Proposal post on Discourse to explain the result of the implementation and the outcome or the solution required from external developper

Should a solution implemented internally be sufficient, the result of the implementation will be announced directly to the community through the Governance Proposal post on Discourse.
Should an external dev solution be required, devs will be rewarded on a first come first serve basis with reward voted on by Wrap Board.

