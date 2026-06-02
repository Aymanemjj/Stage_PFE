<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRewardRequest;
use App\Http\Requests\UpdateRewardRequest;
use App\Models\Reward;
use App\Services\RewardService;
use Exception;

class RewardController extends Controller
{
    public function __construct(private RewardService $rewardService) {}

    public function index()
    {
        try {
            return $this->rewardService->listAllRewards();
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function show(Reward $reward)
    {
        try {
            return $this->rewardService->listAllRewards($reward);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function store(StoreRewardRequest $request)
    {
        try {
            return $this->rewardService->createReward($request->validated());
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function update(UpdateRewardRequest $request, Reward $reward)
    {
        try {
            return $this->rewardService->updateReward($reward, $request->validated());
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function destroy(Reward $reward)
    {
        try {
            return $this->rewardService->deleteReward($reward);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
