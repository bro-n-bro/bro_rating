import math
from config import ALLOCATION, COST_OPTIMIZATION, DECENTRALIZATION, CONFIDENCE, RELIABILITY, PARTICIPATION


def get_cost_optimization(commission: float):
    if 0.01 <= commission <= 0.10:
        return 1 / (commission**2)
    else:
        return 0


def get_cost_optimization_endorsement(
        cost_optimization,
        cost_optimization_sum,
        ):
    return cost_optimization / cost_optimization_sum * ALLOCATION * COST_OPTIMIZATION


def get_decentralization(rank):
    return math.log(rank + 1)


def get_decentralization_endorsement(decentralization, decentralization_sum):
    return (decentralization / decentralization_sum) * ALLOCATION * DECENTRALIZATION


def get_confidence(ownership):
    if 0.0 < ownership < 0.2:
        confidence = 0.000768996 * math.exp(35.8517 * ownership)
    else:
        confidence = 1.41667 - 2.25 * ownership + 0.833333 * ownership**2
    return confidence


def get_confidence_endorsement(confidence, confidence_sum):
    return (confidence / confidence_sum) * ALLOCATION * CONFIDENCE


def get_reliability(staked, delegator_shares):
    return staked / delegator_shares


def get_reliability_endorsement(reliability, reliability_sum):
    return (reliability / reliability_sum) * ALLOCATION * RELIABILITY


def get_participation(votes):
    return math.log10(votes + 1)


def get_participation_endorsement(superintelligence, superintelligence_sum):
    return (superintelligence / superintelligence_sum) * ALLOCATION * PARTICIPATION
