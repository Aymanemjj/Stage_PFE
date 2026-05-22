<?php

namespace App\Services;

use App\Http\Resources\RewardResource;
use App\Models\Reward;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class RewardService
{

    public function listAllRewards():JsonResponse{
        return response()->json([
            'data' =>  RewardResource::collection(Reward::all())
        ],200);
    }

    public function showRewardDetails(Reward $reward):JsonResponse{
        return response()->json([
            'data' =>  RewardResource::make($reward)
        ],200);
    }

    public function createReward(array $data):JsonResponse{
        return response()->json([
            'data' =>  RewardResource::make(Reward::create($data))
        ],201);
    }

    public function updateReward(Reward $reward,array $data):JsonResponse{
        $reward->update($data);
        return response()->json([
            'data' =>  RewardResource::make($reward)
        ],200);
    }

    public function deleteReward(Reward $reward):Response{
        $reward->delete();
        return response()->noContent();
    }
}
