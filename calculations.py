import math
from config import ALLOCATION, COST_OPTIMIZATION, DECENTRALIZATION, CONFIDENCE, RELIABILITY, PARTICIPATION


def get_cost_optimization(commission: float):
    if 0.01 <= commission <= 0.10:
        return 1 / (commission**2)
    else:
        return 0


def get_cost_optimization_endorsement(
        cost_optimization,
        cost_optimization_max,
        ):
    return cost_optimization / cost_optimization_max * ALLOCATION * COST_OPTIMIZATION


def get_decentralization(rank):
    return math.log(rank + 1)


def get_decentralization_endorsement(decentralization, decentralization_max):
    return (decentralization / decentralization_max) * ALLOCATION * DECENTRALIZATION


def get_confidence(ownership):
    if 0.0 < ownership < 0.2:
        confidence = 0.000768996 * math.exp(35.8517 * ownership)
    else:
        confidence = 1.41667 - 2.25 * ownership + 0.833333 * ownership**2
    return confidence


def get_confidence_endorsement(confidence, confidence_max):
    return (confidence / confidence_max) * ALLOCATION * CONFIDENCE


def get_reliability(staked, delegator_shares):
    tokens_blurring = staked / delegator_shares
    return tokens_blurring ** 32


def get_reliability_endorsement(reliability, reliability_max):
    return (reliability / reliability_max) * ALLOCATION * RELIABILITY


def get_participation(votes):
    return math.log10(votes + 1)


def get_participation_endorsement(superintelligence, superintelligence_max):
    if superintelligence_max == 0.0:
        return 0
    else:
        return (superintelligence / superintelligence_max) * ALLOCATION * PARTICIPATION
